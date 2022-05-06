import { useRouter } from "next/router";

const Name = ()=>{
  const router = useRouter()
  const {name} = router.query

  return(
    <p>Your search is {name}</p>
  )
}

export default Name