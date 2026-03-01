"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveUser } from "@/lib/store";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
      const [name, setName] = useState("");
        const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
            const [error, setError] = useState("");

              const handleSubmit = (e: React.FormEvent) => {
                  e.preventDefault();
                      setError("");
                          if (!email || !password) { setError("Please fill in all fields."); return; }
                              if (isSignUp && !name) { setError("Please enter your name."); return; }
                                  saveUser({ name: name || email.split("@")[0], email, isLoggedIn: true, isPro: false, createdAt: new Date().toISOString() });
                                      router.push("/dashboard");
                                        };

                                          return (
                                              <div className="min-h-[80vh] flex items-center justify-center px-4">
                                                    <div className="w-full max-w-md">
                                                            <div className="text-center mb-8">
                                                                      <h1 className="text-3xl font-bold text-gray-900">{isSignUp ? "Create your account" : "Welcome back"}</h1>
                                                                                <p className="text-gray-600 mt-2">{isSignUp ? "Start saving your work and unlock Pro features." : "Sign in to access your dashboard and saved projects."}</p>
                                                                                        </div>
                                                                                                <form onSubmit={handleSubmit} className="bg-white border rounded-2xl p-8 shadow-sm space-y-4">
                                                                                                          {isSignUp && (
                                                                                                                      <div>
                                                                                                                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                                                                                                                                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
                                                                                                                                                              </div>
                                                                                                                                                                        )}
                                                                                                                                                                                  <div>
                                                                                                                                                                                              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                                                                                                                                                                                          <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                              <div>
                                                                                                                                                                                                                                          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                                                                                                                                                                                                                                      <input type="password" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                          {error && <p className="text-red-600 text-sm">{error}</p>}
                                                                                                                                                                                                                                                                                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">{isSignUp ? "Create Account" : "Sign In"}</button>
                                                                                                                                                                                                                                                                                            </form>
                                                                                                                                                                                                                                                                                                    <p className="text-center text-sm text-gray-600 mt-6">
                                                                                                                                                                                                                                                                                                              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                                                                                                                                                                                                                                                                                                                        <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600 font-medium hover:underline">{isSignUp ? "Sign in" : "Create one for free"}</button>
                                                                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                                                                        <div className="text-center mt-4">
                                                                                                                                                                                                                                                                                                                                                  <Link href="/tools" className="text-sm text-gray-500 hover:underline">Or continue without an account</Link>
                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                      }