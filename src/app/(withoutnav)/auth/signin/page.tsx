"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaDiscord, FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign In</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
              <div className="flex flex-col items-center space-y-4 mt-5">
                <div className="flex w-full space-x-4">
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black ">
                    <FaGoogle /> Google
                  </Button>
                  <Button className="flex items-center justify-center w-1/2 border bg-transparent text-white font-semibold hover:text-black ">
                    <FaDiscord /> Discord
                  </Button>
                </div>

                {/* Divider */}
                <div className="flex items-center w-full">
                  <hr className="flex-1 border-gray-600" />
                  <span className="mx-4 text-xs text-gray-400">
                    OR CONTINUE WITH
                  </span>
                  <hr className="flex-1 border-gray-600" />
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="example@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="**********"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col ">
            <Button className="w-full mb-5">Sign In</Button>
            <div className="w-full flex justify-between text-sm">
              <div className="flex space-x-2">
                <span>Don&apos;t have an account? </span>
                <Link className="font-semibold" href="/auth/signup">
                  Sign up
                </Link>
              </div>
              <Link
                href="/auth/reset-password"
                className="text-sm font-semibold"
              >
                Reset Password
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://skateshop.sadmn.com/images/auth-layout.webp')`,
          }}
        ></div>

        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))`,
          }}
        ></div>
      </div>
    </div>
  );
}
