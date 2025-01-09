import { Bug } from "lucide-react";

import { LoginForm } from "@/Features/login/LoginForm";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <p href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900">
              <Bug className="size-4" />
            </div>
            Fuck Society
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          poster="./src/assets/loginimg.jpg"
        >
          <source src="./src/assets/crysis.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}
