import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../Hooks/useFetch';
import { PHOTO_GET } from '../api';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';
import PhotoContent from '../Components/Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, laoding, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);
  function HandleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={HandleOutsideClick}>
      {error && <Error error={error} />}
      {laoding && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
