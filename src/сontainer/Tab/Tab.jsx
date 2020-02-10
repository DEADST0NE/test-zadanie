import React from 'react';

import { NavLink, Route } from 'react-router-dom';

import s from './Tab.module.css';
import ItemTileList from '../../сomponent/ItemTileList'
  
const Tab = (props) => {

    const TestData = [
        {
          "id": 1,
          "name": "Демография",
          "countReports": 51,
          "mnemo": "demography"
        },
        {
          "id": 6,
          "name": "Культура и досуг",
          "countReports": 1,
          "mnemo": "culture"
        },
        {
          "id": 22,
          "name": "Экономика",
          "countReports": 115,
          "mnemo": "economy"
        }
      ]

    const TestData2 = [
        {
          "id": "01838199-f68a-44c4-90ab-fc598f6358d7",
          "name": "Гумбетовский район",
          "countReports": 1
        },
        {
          "id": "022060ff-8825-4d59-a07b-e153bd0db3bb",
          "name": "Тарумовский район",
          "countReports": 1
        },
        {
          "id": "0439e645-4f99-4ab3-8716-5b9643d87649",
          "name": "Министерство экономики и территориального развития Республики Дагестан",
          "countReports": 115
        },
        {
          "id": "05b59492-1fa4-402e-b75a-15a066826e21",
          "name": "Хунзахский район",
          "countReports": 1
        },
        {
          "id": "1a2a99c1-590a-425f-90da-af6b2dfe7b0e",
          "name": "Чародинский район",
          "countReports": 1
        },
        {
          "id": "1fb511c7-bb69-4234-87ed-948eb283e7a5",
          "name": "Акушинский район",
          "countReports": 1
        },
        {
          "id": "21bebb5f-b3c5-4e1f-b988-3b0e7dd7b206",
          "name": "Гергебильский район",
          "countReports": 1
        },
        {
          "id": "23e6005b-0086-4be0-947f-2525a0773b4d",
          "name": "Сулейман-Стальский район",
          "countReports": 1
        },
        {
          "id": "271b4a6e-b481-4a67-a326-d536258e42ad",
          "name": "Кизилюртовский район",
          "countReports": 1
        },
        {
          "id": "2e36cb77-7244-4941-80e9-e8fc9caf3a2c",
          "name": "Унцукульский район",
          "countReports": 1
        },
        {
          "id": "393bfb8e-b0ef-4085-8e85-7da080243d63",
          "name": "город Южно-Сухокумск",
          "countReports": 1
        },
        {
          "id": "43c156f8-b43d-469e-9775-ad654f99948e",
          "name": "Ботлихский район",
          "countReports": 1
        },
        {
          "id": "43d6670c-f17c-4f37-bffa-d6460da9d729",
          "name": "Карабудахкентский район",
          "countReports": 1
        },
        {
          "id": "48497b14-6c55-4a72-9ffe-232505f090d0",
          "name": "Каякентский район",
          "countReports": 1
        },
        {
          "id": "4b7fdc03-a08c-4124-8022-e93075f2b697",
          "name": "Ахвахский район",
          "countReports": 1
        },
        {
          "id": "4bfc42a0-5c21-4743-8571-b814c44be255",
          "name": "Сергокалинский район",
          "countReports": 1
        },
        {
          "id": "4c45cc05-03e5-4c90-9e66-c6b66fa5741f",
          "name": "Кизлярский район",
          "countReports": 1
        },
        {
          "id": "4facb8fb-07e7-4629-9b46-698ef0ec2ac3",
          "name": "Левашинский район",
          "countReports": 1
        },
        {
          "id": "4fd05888-9d35-4f68-a663-d9749b635d47",
          "name": "город Кизляр",
          "countReports": 1
        },
        {
          "id": "50030704-68ed-4db2-8785-fa0796316c44",
          "name": "город Дагестанские Огни",
          "countReports": 1
        },
        {
          "id": "50d00ac7-1f0c-4c62-b9be-947fd7ca70e1",
          "name": "Новолакский район",
          "countReports": 1
        },
        {
          "id": "556dcc20-5ea9-4e52-8df4-48f58492aa7d",
          "name": "Ногайский район",
          "countReports": 1
        },
        {
          "id": "59ec19f7-36fe-4e70-9d0e-abe5db7e3266",
          "name": "Казбековский район",
          "countReports": 1
        },
        {
          "id": "5a6647c5-565a-4c45-aa84-1b723be7993d",
          "name": "Цунтинский район",
          "countReports": 1
        },
        {
          "id": "5b2062b4-3747-4faf-b46f-71ace3e6378a",
          "name": "Магарамкентский район",
          "countReports": 1
        },
        {
          "id": "661159b9-fc41-47a0-8ef0-189565ebef0a",
          "name": "Хасавюртовский район",
          "countReports": 1
        },
        {
          "id": "705930bb-5f33-4b2b-9ac7-b73b00c29ad9",
          "name": "город Дербент",
          "countReports": 1
        },
        {
          "id": "7c45d4bf-3203-4d16-b504-52e06c81bc70",
          "name": "Кулинский район",
          "countReports": 1
        },
        {
          "id": "7d92b3bb-bfdf-499c-9e17-41392077bfd1",
          "name": "город Избербаш",
          "countReports": 1
        },
        {
          "id": "7e4d8a62-0fd3-41f0-a398-91ea519553dd",
          "name": "Табасаранский район",
          "countReports": 1
        },
        {
          "id": "819fdb8d-1124-46dd-9ca5-8f437ed598ae",
          "name": "Хивский район",
          "countReports": 1
        },
        {
          "id": "86aa5bc4-c2ec-4be3-a46c-1d018b77d9bd",
          "name": "Агульский район",
          "countReports": 1
        },
        {
          "id": "8aad86e3-046c-470f-bfc9-33d29a799680",
          "name": "Дербентский район",
          "countReports": 1
        },
        {
          "id": "8fe89c46-db04-437f-838b-61481bd1f66e",
          "name": "Гунибский район",
          "countReports": 1
        },
        {
          "id": "931cd822-49d2-4ef2-8b98-f7968566e810",
          "name": "Тляратинский район",
          "countReports": 1
        },
        {
          "id": "94761bbd-ba5f-4bf1-a87f-0114777e7ec5",
          "name": "Кумторкалинский район",
          "countReports": 1
        },
        {
          "id": "96813925-c755-4c42-8a72-396f07a93560",
          "name": "город Каспийск",
          "countReports": 1
        },
        {
          "id": "9688d851-8fe7-4373-a89a-57f20002e975",
          "name": "Докузпаринский район",
          "countReports": 1
        },
        {
          "id": "a0571084-5c37-43e6-977b-291e65f0ff0b",
          "name": "город Кизилюрт",
          "countReports": 1
        },
        {
          "id": "a0be1797-67cc-43de-9cf4-2926a6e26389",
          "name": "город Буйнакск",
          "countReports": 1
        },
        {
          "id": "a5565a27-14b3-4c04-aba3-629952e4f474",
          "name": "Дахадаевский район",
          "countReports": 1
        },
        {
          "id": "af727466-baa9-42a3-a775-a53351eb2941",
          "name": "Цумадинский район",
          "countReports": 1
        },
        {
          "id": "b0134961-e40e-4ab8-b0c4-31a3a183c31c",
          "name": "Бежтинский участок",
          "countReports": 1
        },
        {
          "id": "b798e839-3fc9-4e02-82f0-0fdd7d9b4923",
          "name": "Шамильский район",
          "countReports": 1
        },
        {
          "id": "bd178912-3157-4d1f-af64-5add13593db6",
          "name": "Бабаюртовский район",
          "countReports": 1
        },
        {
          "id": "bea127db-b6da-4997-a923-ae9b7dbe515e",
          "name": "Ахтынский район",
          "countReports": 1
        },
        {
          "id": "c3e59549-6512-4ffa-8ee6-177732138144",
          "name": "город Махачкала",
          "countReports": 1
        },
        {
          "id": "d0b77d44-feee-4ec3-b2a4-0dbf68892b62",
          "name": "Кайтагский район",
          "countReports": 1
        },
        {
          "id": "d41f2108-5c6d-4f7a-91fd-5bd0cadbeade",
          "name": "Рутульский район",
          "countReports": 1
        },
        {
          "id": "dac4ce00-cc71-4264-9850-d88ece3d215a",
          "name": "Лакский район",
          "countReports": 1
        },
        {
          "id": "e5882430-9676-4c65-9fee-c5cb856c9489",
          "name": "Буйнакский район",
          "countReports": 1
        },
        {
          "id": "ee15c2f6-2421-4cd5-8be4-519454ee25ae",
          "name": "город Хасавюрт",
          "countReports": 1
        },
        {
          "id": "f97ef4b0-ee7c-489b-b6a6-4339a85813d5",
          "name": "Курахский район",
          "countReports": 1
        }
      ]

    
    return (
        <div className={s.categories}> 

          <div className={s.tab}>
            <nav>
              <NavLink to="/industries" activeClassName={s.active}>По отраслям</NavLink>
              <NavLink to="/organizations" activeClassName={s.active}>По ведомствам</NavLink>
            </nav>
          </div>

          <div className={s.tabContent}>
            <Route path="/industries" component={() => <ItemTileList data={TestData}/> }/>
            <Route path="/organizations" component={() => <ItemTileList data={TestData2}/>} />
          </div> 

        </div>
    )
}

export default Tab; 