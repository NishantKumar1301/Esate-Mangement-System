// import TenantCard from "@/components/cards/TenantCard";
// import ProtectedRoute from "@/components/shared/ProtectedRoutes";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "Nishant Apartments | Tenants",
// 	description:
// 		"Authenticated users can view basic information about other tenants within the property. Tenants can also search for other tenants",
// };

// function TenantsPageContent() {
// 	return (
// 		<div>
// 			<TenantCard />
// 		</div>
// 	);
// }

// export default function TenantsPage() {
// 	return (
// 		<ProtectedRoute>
// 			<TenantsPageContent />
// 		</ProtectedRoute>
// 	);
// }

"use client";
import { useGetAllUsersQuery } from "@/lib/redux/features/users/usersApiSlice";
import React from "react";
import Spinner from "@/components/shared/Spinner";
import ProtectedRoute from "@/components/shared/ProtectedRoutes";

function TenantsPageContent() {
	const { data, isLoading } = useGetAllUsersQuery({});
	if (isLoading) {
		return (
			<div className="flex-center pt-32">
				<Spinner size="xl" />
			</div>
		);
	}
	return (
		<div>
			<h1 className="flex-center font-robotoSlab dark:text-pumpkin text-4xl sm:text-5xl">
				Tenants
			</h1>
			{data && data.profiles.results.length > 0 ? (
				data.profiles.results.map((tenant) => (
					<p key={tenant.id} className="text-2xl dark:text-lime-500">
						{tenant.full_name} - {tenant.occupation}
					</p>
				))
			) : (
				<p>No tenants found</p>
			)}
		</div>
	);
}

export default function TenantsPage() {
	return (
		<ProtectedRoute>
			<TenantsPageContent />
		</ProtectedRoute>
	);
}
