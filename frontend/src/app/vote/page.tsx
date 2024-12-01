"use client";

import NotVotePage from "@/components/vote/NotVotePage";
import YesVotePage from "@/components/vote/YesVotePage";
import { useState } from "react";

export default function VotePage() {
  const [isVoteOpen, setIsVoteOpen] = useState(true);

  return isVoteOpen ? <YesVotePage /> : <NotVotePage />;
}
