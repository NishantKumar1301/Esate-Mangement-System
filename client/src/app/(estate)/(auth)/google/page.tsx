// "use client";

import { randomFillSync } from "crypto";

// import Spinner from "@/components/shared/Spinner";
// import { useSocialAuth } from "@/hooks";
// import { useSocialAuthenticationMutation } from "@/lib/redux/features/auth/authApiSlice";
// import { Suspense } from "react";

// export default function GoogleLoginPage() {
// 	return (
// 		<Suspense
// 			fallback={
// 				<div className="flex-center pt-32">
// 					<Spinner size="xl" />
// 				</div>
// 			}
// 		>
// 			<GoogleLoginContent />
// 		</Suspense>
// 	);
// }

// function GoogleLoginContent() {
// 	const [googleAuthenticate] = useSocialAuthenticationMutation();
// 	useSocialAuth(googleAuthenticate, "google-oauth2");
// 	return null;
// }

export default function GoogleLoginPage(){
    return (
        <div>
            <h1 className="dark:text-pumpkin text-6xl">Google LogIn Page</h1>
        </div>
    )
}
