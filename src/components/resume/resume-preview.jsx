import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Temp1 from "@/Templates/Temp1";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export function ResumePreview({ templateId }) {
  const safeTemplateId = templateId ? templateId.toString() : "Default";
  const contentRef = useRef(); // Reference for the component

  const handleDownloadPDF = useReactToPrint({
    contentRef,
  });

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted pb-2">
        <CardTitle className="text-center text-sm">Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex justify-center">
        <div className="relative w-full max-w-[450px] aspect-[3/4]">
          {/* Ensure Temp1 is wrapped with forwardRef */}
          <Temp1 ref={contentRef} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center bg-muted p-2">
        <Button onClick={handleDownloadPDF} variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download Preview
        </Button>
      </CardFooter>
    </Card>
  );
}
