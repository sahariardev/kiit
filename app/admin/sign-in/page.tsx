import {SignIn} from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <>
            <div className="h-screen">
                <div className="min-h-full flex items-center justify-center">
                    <SignIn/>
                </div>
            </div>
        </>
    );
}

export default SignInPage;