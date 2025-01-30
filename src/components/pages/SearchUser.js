import { Card, CardContent, CardMedia, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'

function SearchUser() {

  const [news, setNews] = useState([])
  let [searchText, setSearchText] = useState("")
  let [loading, setLoading] = useState(true)
  const [filteredNews, setFilteredNews] = useState([])

  useEffect(() => {
    
    const fetchNews = async () => {
      try {
        //const NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=15b70fa011a94eef990296ebf4609a11"
        const NEWS_API = "https://newsapi.org/v2/everything?q=movie&apiKey=15b70fa011a94eef990296ebf4609a11"
        const res = await fetch(NEWS_API)
        const data = await res.json()
        setNews(data.articles)
        setFilteredNews(data.articles)
        setLoading(false)
      } catch (error) {
          console.log("No news found, error message: ", error)
      }
      finally {
        setLoading(false)
      }
    }

    fetchNews()
    
  }, [])


  const handleChange = (event) => {
    const term = event.target.value
    setSearchText(term)

    if (term.trim() === ''){
      setFilteredNews(news)
    } else {
      const filtered = news.filter((item) => item.title.toLowerCase().includes(term.toLowerCase())) 
      setFilteredNews(filtered)
    }
  }


  return (
    <div>
        <TextField 
        fullWidth 
        label="Search News by Title" 
        value={searchText} 
        onChange={handleChange}
        margin='normal'
        />
        {

          loading ? (
          <div>
            <CircularProgress/>
          </div>
        ) : (
        <div>
          <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 3, md: 4}}>
            {
              filteredNews.map((value, index) => {
                return(
                  <Grid item key={index} xs={6} md={4}>
                    <Card>
                      <CardMedia sx={{height:'200px'}} image={value.urlToImage}/>
                      <CardContent>
                      <Typography variant='h6'>{value.title}</Typography>
                      <Typography variant='body6'>{value.description}</Typography>
                      </CardContent>
                      
                    </Card>
                  </Grid>
                )
              })
            }
          </Grid>
        </div>
        )
         
        }
    </div>
  )
}

export default SearchUser