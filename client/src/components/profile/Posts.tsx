"use client";

import { TabsContent } from "@/components/ui/tabs";
import IndividualPostCard from "../cards/IndividualPostCard";

export default function Posts() {
	return (
		<TabsContent value="posts">
				<IndividualPostCard />
		</TabsContent>
	);
}
