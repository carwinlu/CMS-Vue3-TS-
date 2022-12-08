import axios from 'axios'

axios
  .get(
    'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
  )
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
