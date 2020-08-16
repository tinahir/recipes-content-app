import Error from "next/error";

type Props = {
  title: string;
  statusCode?: number;
};
export default function NotFound({ title, statusCode = 404 }: Props) {
  return <Error statusCode={statusCode} title={title}></Error>;
}
