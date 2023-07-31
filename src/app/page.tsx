import SignInButton from "@/components/SignInButton";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    //means that the user is logged in
    return redirect("/dashboard");
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="md:w-[500px] w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizy!</CardTitle>
          <CardDescription>
            Quizy is a place where you can attend quizzes to evaluate your
            knowledge and also share with your friends.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignInButton text="Sign in with Google!" />
        </CardContent>
      </Card>
    </div>
  );
}
