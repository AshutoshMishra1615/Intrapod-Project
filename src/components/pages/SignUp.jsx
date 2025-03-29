import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Signup() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm({});
  
    const [profilePic, setProfilePic] = useState(null);
  
    const handleImageUpload = async (file) => {
      if (!file) return null;
      
    };
  
     const onSubmit = async (data) => {
      try {
        

      } catch (error) {
       
      }
    };
  

    const handleGoogleSignIn = async () => {
      try {
       
      } catch (error) {
        
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <Card className="p-6 w-full max-w-md shadow-lg rounded-lg bg-gray-50">
          <h2 className="text-center text-2xl font-bold mb-4">Signup</h2>
  
          <Button 
          variant="outline"
          onClick={handleGoogleSignIn} 
          className="w-full bg-white text-black border-gray-400 flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="mr-2 h-4 w-4"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Sign Up with Google
          </Button>
  
          <form 
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}>
            <Label>Name</Label>
            <Input {...register("name")} placeholder="Your Name" className="mb-2" />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
  
            <Label>Email</Label>
            <Input type="email" {...register("email")} placeholder="Your Email" className="mb-2" />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
  
            <Label>Password</Label>
            <Input type="password" {...register("password")} placeholder="Password" className="mb-2" />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
  
            <Label>Phone Number</Label>
            <Input {...register("phone")} placeholder="Phone Number" className="mb-2" />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
  
            <Label>User Type</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Student">Student</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Freelancer">Freelancer</SelectItem>
                <SelectItem value="Job Seeker">Job Seeker</SelectItem>
                <SelectItem value="Entrepreneur">Entrepreneur</SelectItem>
              </SelectContent>
            </Select>

            <Label>Preferred Industry</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tech">Tech</SelectItem>
                <SelectItem value="Management">Management</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
              </SelectContent>
            </Select>
  
            <Label>Skills (Optional)</Label>
            <Input {...register("skills")} placeholder="Your Skills" className="mb-2" />
  
            <Label>Experience (Optional)</Label>
            <Input {...register("experience")} placeholder="Your Experience" className="mb-2" />
  
            <Label>Profile Picture (Optional)</Label>
            <Input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="mb-2" />
  
            <Button type="submit" className="w-full bg-[#1a91f0] hover:bg-blue-400 text-white mt-4">
              Sign Up
            </Button>
          </form>
        </Card>
      </div>
    );
  }