import { S3Image } from '../../awsHelpers';
import BlankProfileImg from '../BlankProfileImage';

const ProfileImg = ({ imgKey, style, resizeMode=null }) => {
  return (
    <>
      {imgKey ?
        <S3Image 
          imgKey={imgKey}
          style={style}
          resizeMode={resizeMode}
        />
        :
        <BlankProfileImg style={style} />
      }
    </>
  )
}

export default ProfileImg;