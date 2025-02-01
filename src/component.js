import Card from "antd/es/card/Card"
import CountTransfer from "./components/CountTransfer/CountTransfer"
import Menu from "./components/Menu/Menu"
import Sorted from "./components/Sorted/Sorted"
import Tickets from "./components/Tickets/Tickets"
import Ticket from "./components/Ticket/Ticket"
import App from "./App"
import UlTransf from "./components/CountTransfer/UlTransf"


/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-no-undef */
<App>
  <Menu> //Весь Экран
    <CountTransfer> // Выбор количества пересадок 
      <Card>
        <UlTransf></UlTransf>
      </Card> // Карта с лишками пересадок
    </CountTransfer>

    <Sorted></Sorted> // Кнопки сортировки цены

    <Tickets> // Все билеты
      <Ticket></Ticket> // Каждый билет
    </Tickets>
  </Menu>
</App>
