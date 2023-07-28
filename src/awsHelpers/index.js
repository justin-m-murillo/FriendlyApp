import { Storage } from 'aws-amplify';
import { S3Image as Image } from 'aws-amplify-react-native';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


export const awsUploadImage = async (fileUri) => {
  try {
    const response = await fetch(fileUri);
    const blob = await response.blob();
    const key = `${uuidv4()}.png`;
    await Storage.put(key, blob, {
      contentType: "image/png", // contentType is optional
    });
    return key;
  } catch (err) {
    console.log("Error uploading file:", err);
  }
}

export const S3Image = ({imgKey, style, resizeMode=null}) => {
  return <Image imgKey={imgKey} style={style} resizeMode={resizeMode} />
}