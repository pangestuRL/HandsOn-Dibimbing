import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";

export default function Home(){

  const router = useRouter();
  const id = router.query.id;

  const [data, setData] = useState();

  useEffect(() => {

  })

  return( 
  <div>
    <h1> Home Page </h1>
    <Link href={"/pangestu"}>Pangestu</Link>
    <Link href={"/shop/cireng-domba"}>Cireng Domba</Link>
  </div>
  )
}