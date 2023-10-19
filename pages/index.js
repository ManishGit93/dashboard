import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });
import Topbar from "@/components/Topbar";
import Cards from "@/components/Cards";
import Charts from "@/components/Charts";
import Products from "@/components/Products";
import UserTable from "@/components/UserTable";

export default function Home() {
  return (
    <>
      <Layout>
        <Topbar></Topbar>
        <Cards></Cards>
        <Charts></Charts>
        <UserTable></UserTable>
        <Products></Products>
      </Layout>
    </>
  );
}
