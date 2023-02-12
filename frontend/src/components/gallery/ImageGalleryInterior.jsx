import React, {useEffect, useState} from "react";
import { Image } from 'antd';
import {imageData} from '../../constants/data';
import { image1_about,

} from "../../assets";

const ImageGalleryInterior = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                 <Image
                    preview={{
                      visible: false,
                    }}

                    src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                    onClick={() => setVisible(true)}
                  />
                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                  <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                  >
                      <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                      <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                      <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                  </Image.PreviewGroup>
            </div>
        </>);
};

export default ImageGalleryInterior;