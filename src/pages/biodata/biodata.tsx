import Constants from "@/config/constant";
import { Card, CardContent } from "@/components/ui/card";
import MyImg from "@/assets/images/poster.webp";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  GraduationCap,
  Download,
  Home,
  MapPin,
  Users,
} from "lucide-react";
import { Instagram, Globe, Twitter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

interface ZoomableImageProps {
  src: string;
  alt: string;
}

export function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative w-48 h-48 rounded-full overflow-hidden cursor-pointer">
          <img
            src={src}
            alt={alt}
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full p-0">
        <div className="relative w-full h-[80vh] flex justify-center">
          <img src={src} alt={alt} className="object-contain h-full" />
        </div>
        <DialogFooter className="p-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const link = document.createElement("a");
              link.href = src;
              link.download = alt;
              link.click();
            }}
          >
            <Download />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function MarriageBiodata() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardContent className="p-4 flex flex-col sm:flex-row md:flex-col gap-4 items-center">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 rounded-full border overflow-hidden">
                  <ZoomableImage src={MyImg} alt="Raj Raiyani" />
                </div>
                <div className="text-center space-y-2">
                  <h2 className="text-xl font-semibold">Raj Raiyani</h2>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-left md:text-center sm:w-2/3">
                <dl className="grid gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Full Name</dt>
                    <dd className="font-medium">Raj Raiyani</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Birth Date</dt>
                    <dd className="font-medium">08/10/2002</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Height</dt>
                    <dd className="font-medium">6 feet</dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="p-6 space-y-6">
              {/* <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User2 className="w-5 h-5" />
                  Personal Details
                </h3>
                <Separator className="my-3" />
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Full Name</dt>
                    <dd className="font-medium">Raj Raiyani</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Birth Date</dt>
                    <dd className="font-medium">08/10/2002</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Height</dt>
                    <dd className="font-medium">6 feet</dd>
                  </div>
                </dl>
              </div> */}

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Education</dt>
                    <dd className="font-medium">B.Tech (Computer)</dd>
                    <p className="text-sm text-muted-foreground">
                      dropout in 3rd year from college
                    </p>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Family Background
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Father's Name</dt>
                    <dd className="font-medium">
                      Prakashbhai Ravjibhai Raiyani
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">
                      Father's Occupation
                    </dt>
                    <dd className="font-medium">Imitation jewellery</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Mother's Name</dt>
                    <dd className="font-medium">
                      Hetalben Prakashbhai Raiyani
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">
                      Mother's Occupation
                    </dt>
                    <dd className="font-medium">Housewife</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Maternal Details
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Mama's Name</dt>
                    <dd className="font-medium">
                      Nilesbhai Kadvabhai Kakadiya (Bhadla)
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Contact Details
                </h3>
                <Separator className="my-3" />
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Contact Number</dt>
                    <dd className="font-medium">+91 9374599564</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Address</dt>
                    <dd className="font-medium">
                      "Bhakti Kunj", Lakheswar socity, 5/6 corner, Pedak road,
                      Rajkot, Gujarat. 360003
                    </dd>
                  </div>
                </dl>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">social handles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 h-12"
                asChild
              >
                <a
                  href={Constants.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 h-12"
                asChild
              >
                <a
                  href={Constants.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-start gap-2 h-12"
                asChild
              >
                <a
                  href="https://rajraiyani.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-5 w-5" />
                  <span>Personal Website</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Last Updated: <CalendarDays className="inline w-4 h-4 mx-1" />{" "}
            December 2023
          </p>
        </div>
      </div>
    </div>
  );
}
