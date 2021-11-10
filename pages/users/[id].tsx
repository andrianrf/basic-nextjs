import { useRouter } from "next/dist/client/router";
import Layout from "../../components/Layout/Layout";

export default function detail() {

    const router = useRouter();

    const {id} = router.query;

    return (
        <Layout pageTitle="Users Detail">
            User Detail Page  {id}
        </Layout>
    )
}
