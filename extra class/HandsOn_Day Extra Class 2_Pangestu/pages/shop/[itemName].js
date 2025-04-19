import { useRouter } from "next/router";

export default function ProductDetail(){
    const router = useRouter();
    return <div>{router.query.itemName}</div>
}