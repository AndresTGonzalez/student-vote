"use client";

import NotVotePage from "@/components/vote/not-vote-page";
import YesVotePage from "@/components/vote/yes-vote-page";
import { useState } from "react";

export default function VotePage() {
  const [isVoteOpen, setIsVoteOpen] = useState(true);

  return isVoteOpen ? <YesVotePage /> : <NotVotePage />;
}
