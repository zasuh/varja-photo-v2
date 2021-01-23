import Image from 'next/image'
import { SRLWrapper } from 'simple-react-lightbox'
import Layout from '../components/layout'

const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Product() {
  return (
    <Layout>
      <SRLWrapper>
        <div className="grid grid-cols-3 gap-4">
          {indexes.map(index => (
            <Image
              key={index}
              src={`/product/${index}.jpg`}
              layout="fixed"
              width={400}
              height={400}
              quality={100}
            />
          ))}
        </div>
      </SRLWrapper>
    </Layout>
  )
}