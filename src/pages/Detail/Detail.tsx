import React, { Fragment } from 'react'
import Gif from 'components/Gif/Gif';
import { Redirect } from 'wouter';
import { Helmet } from "react-helmet";

// * Custom Hooks
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner/Spinner';

interface Props {
  params: {
    id: string
  }
}

const Detail = ({ params }:Props) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  const title = gif? gif.title : '';

  if (isLoading) {
    return(
      <Fragment>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </Fragment>
    );
  }
    
  if (isError) return <Redirect to='/404' />
  if (!gif) return null;

  return (
    <Fragment>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h3 className="App-title">{ gif?.title }</h3>      
      <Gif gif={gif!} />
    </Fragment>
  )
}

export default Detail
