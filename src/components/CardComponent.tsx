import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = () => {
  return (
    <>
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Melati</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <CardDescription>Card Description</CardDescription>
        </CardContent>
        <CardFooter>
          <Button> Button </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
