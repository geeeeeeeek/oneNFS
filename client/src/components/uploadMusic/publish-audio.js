import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { useState } from "react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";
import { UploadCloud, Percent } from "lucide-react";
import axios from "axios";
import { useWallets } from "@privy-io/react-auth";
import { ownSoundContractABI, ownSoundContractAddress } from "@/utils/contract";
import { Contract } from "ethers";
import { toast } from "sonner";
import Loader from "../loader";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

const PublishAudio = ({ getSongs }) => {
  const [isMusicUploading, setIsMusicUploading] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [isPublishAlertOpen, setIsPublishAlertOpen] = useState(false);
  const [value, setValue] = useState("");
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const [musicFile, setMusicFile] = useState(null);
  const [step, setStep] = useState(1);
  const [isRentingAllowed, setIsRentingAllowed] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [fileName, setFileName] = useState("");
  const [songName, setSongName] = useState("");
  const [songDescription, setSongDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [royaltyPrice, setRoyaltyPrice] = useState("");
  const [royaltyPercentage, setRoyaltyPercentage] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fullRoyaltyAllowed, setFullRoyaltyAllowed] = useState(false);
  const [formData, setFormData] = useState({
    songName: "",
    songDescription: "",
    basePrice: "",
    royaltyPrice: "",
    royaltyPercentage: "",
    isRentingAllowed: false,
  });
  const handleFileUpload = async (e) => {
    // const formData = {
    //   songName: "",
    //   songDescription: "",
    //   basePrice: "",
    //   royaltyPrice: "",
    //   royaltyPercentage: "",
    //   isRentingAllowed: false,
    // };
    const file = e.target.files[0];
    if (file) {
      setIsMusicUploading(true);
      try {
        const data = new FormData();

        // Append text fields
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        // Append music file
        data.append("musicFile", file);
        data.append("userAddress", w0.address);

        const response = await axios.post("/api/endpoint", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("Response:", response.data);
        console.log("Response:", response.data.value);
        setValue(response.data.value);

        setMusicFile(file);
        setFileName(file.name);
      } catch (error) {
        toast.error("Error uploading file");
        console.error("Error uploading file:", error);
      } finally {
        setIsMusicUploading(false);
      }
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsImageUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "fi0lxkc1");
        formData.append("api_key", "697773597345229");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/da9h8exvs/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Upload failed: ${errorData.error.message}`);
        }

        const data = await response.json();
        setImageSrc(data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsImageUploading(false);
      }
    }
  };
  const handleDeleteImage = () => {
    setImageSrc(null);
  };

  const handleNextStep = async () => {
    if (step === 1 && fileName && musicFile) {
      setStep(2);
    }
  };

  const handlePreviousStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async () => {
    setErrorMessage("");
    setIsLoading(true);
    console.log(value);
    const createNFTParams = {
      basePrice: basePrice,
      fullRoyaltyAllowed: fullRoyaltyAllowed,
      fullRoyaltyBuyoutPrice: royaltyPrice,
      title: songName,
      description: songDescription,
      coverImage: imageSrc,
      mp3FileLocationId: value,
      isRentingAllowed: isRentingAllowed,
      supply: 100,
      royaltyPercentage: royaltyPercentage,
    };

    const randomNumber = value; // Ensure this is a valid uint256

    try {
      const provider = await w0?.getEthersProvider();
      if (!provider) {
        throw new Error("Provider is not available");
      }

      const signer = await provider.getSigner();
      if (!signer) {
        throw new Error("Signer is not available");
      }

      const contract = new Contract(
        ownSoundContractAddress,
        ownSoundContractABI,
        signer
      );

      const res = await contract.createNFT(createNFTParams, randomNumber);
      await res.wait(1);
      console.log(res);
      setIsLoading(false);
      setIsPublishAlertOpen(false);
      await getSongs(w0.address);
      toast.success("Successfully published the song");
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating NFT:", error);
      setErrorMessage("Failed to create NFT. Please try again.");
    }
  };

  // Handle the FormData, e.g., send it to an API
  // const { data } = await axios.post("/api/upload", formData);
  // console.log(data);

  return (
    <AlertDialog
      open={isPublishAlertOpen}
      onOpenChange={(e) => setIsPublishAlertOpen(e)}
    >
      <AlertDialogTrigger>
        <Button variant="outline" className="w-full h-full">
          Publish Audio
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {step === 1 ? "Upload Music" : "Song Details"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {step === 1
              ? "Upload your music file and proceed to enter the song details."
              : "Enter the details of your song and finalize your submission."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-3">
          {step === 1 && (
            <>
              <div className="relative h-24 w-full border border-muted-foreground border-dashed rounded-md flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105">
                <input
                  type="file"
                  accept="audio/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFileUpload}
                  disabled={isMusicUploading}
                />
                {isMusicUploading ? (
                  <div className="flex items-center gap-2">
                    <div className="buffering"></div>
                    <Loader />
                  </div>
                ) : (
                  <>
                    <UploadCloud className="text-muted-foreground w-8 h-8" />
                    <p className="text-muted-foreground">
                      {fileName
                        ? `Selected File: ${fileName}`
                        : "Upload Music File"}
                    </p>
                  </>
                )}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex gap-3 items-center">
                <div className="w-24 h-24 bg-muted rounded-md overflow-hidden relative">
                  {imageSrc ? (
                    <>
                      <img
                        src={imageSrc}
                        alt="Uploaded"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={handleDeleteImage}
                        className="absolute z-[99999999999] bottom-1 right-1 bg-red-600 text-white rounded-full p-1 transition-opacity"
                      >
                        <MdDeleteForever />
                      </button>
                    </>
                  ) : (
                    <div className="relative h-full w-full flex items-center justify-center">
                      {isImageUploading ? (
                        <div className="flex flex-col items-center">
                          <div className="buffering"></div>
                          <Loader />
                        </div>
                      ) : (
                        <div className="relative h-full w-full flex items-center justify-center">
                          <div>
                            <UploadCloud className="text-muted-foreground" />
                          </div>
                          <label className="absolute cursor-pointer flex items-center justify-center w-full h-full text-muted">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                            />
                          </label>
                        </div>
                      )}
                    </div>
                  )}
                </div>{" "}
                <div className="h-16 flex flex-col justify-between">
                  <Label>Song Name</Label>
                  <Input
                    placeholder="Enter song name"
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Song Description</Label>
                <Textarea
                  placeholder="Enter song description"
                  className="mt-2.5"
                  value={songDescription}
                  onChange={(e) => setSongDescription(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 pt-2">
                  <Label htmlFor="isRentingAllowed">Renting Allowed?</Label>
                  <Switch
                    id="isRentingAllowed"
                    onCheckedChange={(e) => setIsRentingAllowed(e)}
                  />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <Label htmlFor="full-royalty">Full Royalty Allowed?</Label>
                  <Switch
                    id="full-royalty"
                    onCheckedChange={(e) => setFullRoyaltyAllowed(e)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Base Price</Label>
                  <div className="flex items-center gap-3 w-full mt-2.5">
                    <Input
                      placeholder="Enter Base Price"
                      type="number"
                      value={basePrice}
                      onChange={(e) => setBasePrice(e.target.value)}
                    />
                    <Image
                      src="/icons/token-coin.svg"
                      width={20}
                      height={20}
                      alt="coin"
                    />
                  </div>
                </div>
                <div>
                  <Label>Royalty Price</Label>
                  <div className="flex items-center gap-3 w-full mt-2.5">
                    <Input
                      placeholder="Enter Royalty Price"
                      type="number"
                      value={royaltyPrice}
                      onChange={(e) => setRoyaltyPrice(e.target.value)}
                    />
                    <Image
                      src="/icons/token-coin.svg"
                      width={20}
                      height={20}
                      alt="coin"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label>Royalty Percentage</Label>
                <div className="flex items-center gap-3 w-full mt-2.5">
                  <Slider
                    defaultValue={[0]}
                    max={20}
                    step={5}
                    className={""}
                    onValueChange={(e) => setRoyaltyPercentage(e)}
                  />
                  <div className="flex text-muted-foreground">
                    {royaltyPercentage}
                    <Percent className="text-muted-foreground w-4" />
                  </div>
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
            </>
          )}
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {step === 1 && (
            <Button onClick={handleNextStep} disabled={!fileName}>
              Next
            </Button>
          )}
          {step === 2 && (
            <>
              <Button variant="outline" onClick={handlePreviousStep}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!songName || !songDescription || isLoading}
              >
                {isLoading ? "Uploading..." : "Upload"}
              </Button>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PublishAudio;
