import { useRouter } from "next/router";

export default function Blog () {
    const router = useRouter();
    return <div>{router.query.contentTittle}</div>
}