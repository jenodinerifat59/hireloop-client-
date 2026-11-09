import type { Metadata } from "next"

import { AuthCard } from "@/components/auth-card"

export const metadata: Metadata = {
  title: "Sign Up — HireLoop",
}

export default function SignUpPage() {
  return <AuthCard initialMode="signup" />
}
