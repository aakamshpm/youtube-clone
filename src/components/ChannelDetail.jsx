import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos, ChannelCard } from './'



const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  

  return (
    
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,217,255,0.979411833092612) 0%, rgba(229,0,255,1) 100%)',
          zIndez: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail= {channelDetail} marginTop= '-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={ { mr: { sm: '100px' } } } />
        <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default ChannelDetail