import React from 'react'
import { Col, Row} from 'react-bootstrap'

const ContactItem = ({item}) => {

  return (
    <Row>
        <Col lg={2}>
            <img width={50} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADsCAMAAAA/3KjXAAAAe1BMVEX///85OTkoKCjGxsYzMzMnJyc2NjY6Ojr5+fkrKysuLi78/PwjIyMgICAxMTHx8fHc3NzQ0NBzc3NeXl5ERERqamqhoaGVlZXz8/O5ublWVlbDw8Pq6upRUVHi4uKIiIh4eHisrKyZmZkYGBh3d3dKSkqPj4+AgICxsbHS2ckoAAAG2UlEQVR4nO2dC5aiOhCGBSEQQAUVFUHx0Y69/xUOiN7b2KghqVjlnHwL8OQ3ST2TMBgYDAaDwWAwGAwGg8FgMBgMBsM7WBVxMqxI4mKFPRYYwm1epicv4HYFD7xTWubbEHtUavjxYea4gcOs/2BO4DqzQ+xjj02ayX5mc8fqwOH2bD/BHp8Uk6Xndmq6zprrHT5PmL9w7MeaGmG2s/iwpZic3BeiLrinBHukPQjLY20kvNe62LH8GKsYz7mAoit8HmOPV4zMZq/V/JgwO8MesQgLoV3V0rXAHvNrln1VVbhL7FG/QkYVfV2LkYwqyxqRXof5UdwEtvCOOfbYHxNHcqJqXLJ2fjXvZdnbsDnVTOwrkFdlWcEX9vi7ySTNxY0RSbdcPMlCxHAKbA0d7JSWYE2ww9bwm+Gr9EoAm1yaEs6U12C1CmfU0soMYLKq6SJmNcI1wGRV07WmlVTmIJNVTRetGApiZ9U4M2wlP4k5jCrL4pRCw1LZZ13xghJby//4QEuwxqFj43OplLgbl47RSCFna4qt5kYIZN0bbCqua6iYkbQZDbH1XPkDZQcvBH+w9VyZQ6qyrDm2noYV6BqsViGNosZwJFlFeySLxuZagEVODZxGKTRVKKN1QcRzwS7BCg9bUc1KoZTbTUTBZsTAhtDyRhSSkxx8tkb40W5x3gBbDMtimzNyIbTYcHBVlS6+wdVVAvusGxw1Sd4CJlptnC2irD1gWtzG3iPKmo51ycIMNSYnDfaigZ3wjq9ttamqdOFtLriq528Q66CJNouB2uv6R2X9o4tQnzdG9ceFyvmS57A5YlQIWaVu46R4qgYHbZuLHxBlxaDV95/YqBlyqikoHGOuwWq6XC1Gg2Efw0tOGqyGg3/qP0ygK0/WKCHQ4vLBIyiXRPsYuvTENtiKLsB27cj07WB7rGQaQT5wWTcisbUGgymojSfSB/pnO/0DjwH2uEh0ty7sASNe1LpnG5+BuS5mETEYNXBdcSL98Aal2yU/IXbTBGq6SE0W2HQRmyyo6SJ3+XMCMV1sTu6WP4Tvcun4rBu+etrFNoR81o1cOTIkcB6jA9WO65hK6N5mq5glB5jN/SfslfLJiJ69aAhVarzjlEAVrZtC5d4xxfueV+TzZDo5cRcLye0VUYua7jhLxYb8jD3uV0wldHGaHqtF2lsXx21mCTLtGfTaHzBXFeGuVw/F3ZF1WG3CsytcN/Tc84eoqpIUYV2VKoLJyCP8UnB/ueUHqao4C4XzAXl/dUchJIsTDgS7EbknxD7CYbU4CyQp409bg2K9PDIdOmHC16LqVfgxPuuKWB2KZq3pMeFaKFEmWRl8wkHQHds0zmAI8i0cxJNrJjyhT/uEHz7EbMRpr4SLp+in7F4Sroa7oGe10OFf+YTqlIX+Kv5epk4kUQJ1Iic9ZFufirawSCrybH8oZyc+iuQvSjIejZzNdLnYZ/VPJgWWxElWbvjoQuTyMUTvmDmB7UbNb/JNmb29N+ln62MEIuUx4+i4zt7pridL24U85vQQ5trLd02Zv3A03gT6weWP4296ND7ZvEfUDcY3b3Bsi0Dj7aZunEB3hBXutN0qeYatt0Tq9y+ww8BTjRssXAOfDRcn0PjOZIqmqtKlrUpVary4+hpXU8aZyb6KDoN31PKM61a8DaKJSMd5FH3XO0XRcQ00A39Jpz8R+DLU+IaEOPCvTSxQoot7oOtUIGdW1YE+9bq3RT5kpB/Yqxq+WO1ZP2wNGRsOkSLc39iQR76+tL0Q1BfI72dMSOyrC8yDMxq5TUcX4IvxOzJrELLf7NNwWg1sDmULEzJ2sIZD1aEOiEnxbwKod0/g34tUAerKf0FqDYKdKMpQSxi/cWGyri/0tLiNswORRUxVpQtC1faILeOeI0Sp5pvY1qo21zeALPyK0z0gFShSvrghUFcF/tI2AABvdet7OlcegIu8sC+ywKB+ajQkFQ/eUD41SnFrAWwuel6rRtlznQlurWpzKWb+PvCHcqBQzPy3BNo/XSh28Ch0tbpQ7HRBv2YHhdqreP6MpNuqHJfS11vFrithEKgUNIZEt1a1uVQ6J/peOVbFVqkWUoxzG1Si3ckJe/SPUWj6b0kGhA2uvEOmGec2KES7YB/G1YD8p3bJOuMaeYdcYA/9ObIOWef3PNRxZdt3dJ1xjfQLjfq+1wSBrENeUThr9xh2knt5MiY9WZY1lis/ZSSOED7GlsuQKTvjGkmHPCMbvjc4MxlVBZ1zTg/wZBwyrbMzXUidp4H+OjM8Ug6ZXnP1HplmK6ljad3IHFZLjjZ5jv03V5EPyZN/3HtKBoPBYDAYDAaDwWAwGAwGg+F9/AUf7oPlURT4tgAAAABJRU5ErkJggg==' />
        </Col>
        <Col lg={10}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem