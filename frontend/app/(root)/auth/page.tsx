import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SignInForm from './signin'
import SignUpForm from './signup'



export default async function authPage() {
    return (
        <>
            <div className="pt-32 pb-14">
                <h1 className="text-5xl font-bold text-center">Sign In/Up</h1>
            </div>
            <div className="text-center">
                <Tabs 
                    tabcheck="sign-up"
                    defaultValue="sign-in"
                    className="w-[250px] md:w-[400px] mx-auto"
                >
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                        <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="sign-in">
                        <SignInForm />
                    </TabsContent>
                    <TabsContent value="sign-up">
                        <SignUpForm />
                    </TabsContent>
                </Tabs>
            </div>
        </>
    )
}