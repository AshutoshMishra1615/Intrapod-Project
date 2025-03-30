import { Download } from "lucide-react";
import Student from "@/Templates/Temp3";
import ResumeTemplate from "@/Templates/Temp2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ResumePreview({
   templateId ,
    personalData,
    expData,
    educationData,
    skillsData
  }) {
  const safeTemplateId = templateId ? templateId.toString() : "Default";

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted pb-2">
        <CardTitle className="text-center text-sm">Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex justify-center">
        <div className="relative w-full max-w-[600px] aspect-[3/4]">
          <img
            src={`/placeholder.svg?height=600&width=450&text=${encodeURIComponent(
              safeTemplateId.charAt(0).toUpperCase() + safeTemplateId.slice(1)
            )}%20Template`}
            alt={`${safeTemplateId} template preview`}
            className="w-full h-full object-cover"
                />
          <ResumeTemplate 
            personal={personalData || {}} 
            experience={expData || []} 
            education={educationData || []} 
            skills={skillsData || []} 
          />


        </div>
      </CardContent>
      <CardFooter className="flex justify-center bg-muted p-2">
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download Preview
        </Button>
      </CardFooter>
    </Card>

   
  );
}
