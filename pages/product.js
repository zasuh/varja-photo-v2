import { Image } from "cloudinary-react";
import { SRLWrapper } from "simple-react-lightbox";
import Layout from "../components/layout";

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const options = {
  buttons: {
    showDownloadButton: false,
  },
  settings: {
    slideAnimationType: "slide",
    slideSpringValues: [300, 50],
  },
};

export default function Product() {
  return (
    <Layout>
      <SRLWrapper options={options}>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
          {images.map((img) => (
            <Image
              key={img}
              width="440"
              cloudName="zanedev"
              publicId={`product/${img}`}
            />
          ))}
        </div>
      </SRLWrapper>
    </Layout>
  );
}
