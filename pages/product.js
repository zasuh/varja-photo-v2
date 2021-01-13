import { Image } from "cloudinary-react";
import { SRLWrapper } from "simple-react-lightbox";
import Layout from "../components/layout";

const images = [1, 2];

export default function Product() {
  return (
    <Layout>
      <div>PRODUCT</div>
      <SRLWrapper>
        {images.map((img) => (
          <Image
            key={img}
            cloudName="zanedev"
            publicId={`product/product_${img}`}
          />
        ))}
      </SRLWrapper>
    </Layout>
  );
}
