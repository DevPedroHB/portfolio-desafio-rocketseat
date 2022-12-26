import { LabelsProps } from "./labels";
import { ProfileProps } from "./profile";

export type IssuesProps = {
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: ProfileProps;
  labels: LabelsProps[];
  state: string;
  locked: boolean;
  assignee: string;
  milestone: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string;
  author_association: string;
  active_lock_reason: string;
  draft: boolean;
  body: string;
  reactions: {
    url: string;
    total_count: number;
    "+1": number;
    "-1": number;
    laugh: number;
    hooray: number;
    confused: number;
    heart: number;
    rocket: number;
    eyes: number;
  };
  performed_via_github_app: string;
  state_reason: string;
  score: number;
};
