import { Image } from "cloudinary-react";
import { SRLWrapper } from "simple-react-lightbox";
import Layout from "../components/layout";

const images = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];

export default function Product() {
  return (
    <Layout>
      <div>PRODUCT</div>
      <SRLWrapper>
        <div className="grid grid-cols-3 gap-4">
          {images.map((img) => (
            <Image
              key={img}
              width="300"
              cloudName="zanedev"
              publicId={`product/${img}`}
            />
          ))}
        </div>
      </SRLWrapper>
    </Layout>
  );
}
