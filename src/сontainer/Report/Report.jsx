import React from 'react';

import ReportList from '../../сomponent/ReportList';
 
import s from './Report.module.css'

const Test1 = [
    {
      "id": "faecbeee-72b7-49b6-916e-a5d06ae6d460",
      "reportName": "Паспорт экономического и социального развития Агульского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "86aa5bc4-c2ec-4be3-a46c-1d018b77d9bd",
      "organization": "Агульский район"
    },
    {
      "id": "dc1c0fe4-d56d-4ec9-8f4d-26d033f631b5",
      "reportName": "Паспорт экономического и социального развития Табасаранского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "7e4d8a62-0fd3-41f0-a398-91ea519553dd",
      "organization": "Табасаранский район"
    },
    {
      "id": "e1916ccc-394a-4d67-9880-056d5475aa2f",
      "reportName": "Паспорт экономического и социального развития города Кизилюрт",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "a0571084-5c37-43e6-977b-291e65f0ff0b",
      "organization": "город Кизилюрт"
    },
    {
      "id": "f77b13e2-7aa7-4162-a8a3-bc4725798697",
      "reportName": "Паспорт экономического и социального развития Казбековского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "59ec19f7-36fe-4e70-9d0e-abe5db7e3266",
      "organization": "Казбековский район"
    },
    {
      "id": "d5bf5987-6f44-4ee8-93db-955a2c4eeb16",
      "reportName": "Паспорт экономического и социального развития Бабаюртовского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "bd178912-3157-4d1f-af64-5add13593db6",
      "organization": "Бабаюртовский район"
    },
    {
      "id": "812e36fb-f830-48cd-8ed4-b552526d2d37",
      "reportName": "Паспорт экономического и социального развития Каякентского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "48497b14-6c55-4a72-9ffe-232505f090d0",
      "organization": "Каякентский район"
    },
    {
      "id": "ae7f961c-04dd-40d4-9b05-ec03c13b4a91",
      "reportName": "Паспорт экономического и социального развития Чародинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "1a2a99c1-590a-425f-90da-af6b2dfe7b0e",
      "organization": "Чародинский район"
    },
    {
      "id": "03b174a0-5469-4203-a58d-8a9a3eb7519d",
      "reportName": "Паспорт экономического и социального развития Гергебильского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "21bebb5f-b3c5-4e1f-b988-3b0e7dd7b206",
      "organization": "Гергебильский район"
    },
    {
      "id": "a7ea0d73-fd7c-4521-87b1-6e2aed3bea1a",
      "reportName": "Паспорт экономического и социального развития Лакского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "dac4ce00-cc71-4264-9850-d88ece3d215a",
      "organization": "Лакский район"
    },
    {
      "id": "3a9ca1c3-91ae-43ba-b69d-84408f421abd",
      "reportName": "Паспорт экономического и социального развития Шамильского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "b798e839-3fc9-4e02-82f0-0fdd7d9b4923",
      "organization": "Шамильский район"
    },
    {
      "id": "277596e0-6166-4890-a2a7-8fe7ced654e5",
      "reportName": "Паспорт экономического и социального развития города Дагестанские огни",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "50030704-68ed-4db2-8785-fa0796316c44",
      "organization": "город Дагестанские Огни"
    },
    {
      "id": "1677943e-4c3b-42e7-bd04-b4567efddcdf",
      "reportName": "Паспорт экономического и социального развития Левашинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "4facb8fb-07e7-4629-9b46-698ef0ec2ac3",
      "organization": "Левашинский район"
    },
    {
      "id": "350ed96a-8e60-46a8-8728-931787c9fa30",
      "reportName": "Паспорт экономического и социального развития Хунзахского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "05b59492-1fa4-402e-b75a-15a066826e21",
      "organization": "Хунзахский район"
    },
    {
      "id": "e66aec11-dcef-4d79-a1ff-a7e2489a7845",
      "reportName": "Паспорт экономического и социального развития Ногайского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "556dcc20-5ea9-4e52-8df4-48f58492aa7d",
      "organization": "Ногайский район"
    },
    {
      "id": "5493dee4-8e35-4e5d-a896-f31b911b5f92",
      "reportName": "Паспорт экономического и социального развития города Избербаш",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "7d92b3bb-bfdf-499c-9e17-41392077bfd1",
      "organization": "город Избербаш"
    },
    {
      "id": "31396d76-6876-4fca-8fa6-2a816829fab9",
      "reportName": "Паспорт экономического и социального развития города Махачкала",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "c3e59549-6512-4ffa-8ee6-177732138144",
      "organization": "город Махачкала"
    },
    {
      "id": "499ead83-c3a0-42b0-bb62-57e37d7d0a17",
      "reportName": "Паспорт экономического и социального развития города Южно-Сухокумск",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "393bfb8e-b0ef-4085-8e85-7da080243d63",
      "organization": "город Южно-Сухокумск"
    },
    {
      "id": "1ec17d6d-a8b8-4ce6-b91f-43b98b4a2fb5",
      "reportName": "Паспорт экономического и социального развития Докузпаринского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "9688d851-8fe7-4373-a89a-57f20002e975",
      "organization": "Докузпаринский район"
    },
    {
      "id": "7000e5e7-2cbf-43f8-9a77-f600097f8b5c",
      "reportName": "Паспорт экономического и социального развития Сергокалинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "4bfc42a0-5c21-4743-8571-b814c44be255",
      "organization": "Сергокалинский район"
    },
    {
      "id": "e0d98941-7607-47eb-8de7-e66feef921ac",
      "reportName": "Паспорт экономического и социального развития Курахского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "f97ef4b0-ee7c-489b-b6a6-4339a85813d5",
      "organization": "Курахский район"
    },
    {
      "id": "659c64f2-61cc-4a03-83ce-993e42613656",
      "reportName": "Паспорт экономического и социального развития Акушинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "1fb511c7-bb69-4234-87ed-948eb283e7a5",
      "organization": "Акушинский район"
    },
    {
      "id": "d3c25975-3d12-4be8-892f-8ce3e8d47cba",
      "reportName": "Паспорт экономического и социального развития Буйнакского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "e5882430-9676-4c65-9fee-c5cb856c9489",
      "organization": "Буйнакский район"
    },
    {
      "id": "2a825f6e-8cda-4e9f-843f-b731e49f63f1",
      "reportName": "Паспорт экономического и социального развития Кайтагского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "d0b77d44-feee-4ec3-b2a4-0dbf68892b62",
      "organization": "Кайтагский район"
    },
    {
      "id": "8129e653-7d79-4334-8ce3-a5123c68ec24",
      "reportName": "Паспорт экономического и социального развития Дербенского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "8aad86e3-046c-470f-bfc9-33d29a799680",
      "organization": "Дербентский район"
    },
    {
      "id": "ad78f231-6ef3-4f86-b2b7-ee3b7877a016",
      "reportName": "Паспорт экономического и социального развития Кизилюртовского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "271b4a6e-b481-4a67-a326-d536258e42ad",
      "organization": "Кизилюртовский район"
    },
    {
      "id": "1df38eea-62b7-4c21-b321-3556d6ecfe26",
      "reportName": "Паспорт экономического и социального развития Унцукульского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "2e36cb77-7244-4941-80e9-e8fc9caf3a2c",
      "organization": "Унцукульский район"
    },
    {
      "id": "5579f87f-4628-4bc1-976f-4b075f258a28",
      "reportName": "Паспорт экономического и социального развития Хивского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "819fdb8d-1124-46dd-9ca5-8f437ed598ae",
      "organization": "Хивский район"
    },
    {
      "id": "b74cb985-b568-4f16-8e9b-6360ed027c8d",
      "reportName": "Паспорт экономического и социального развития Новолакского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "50d00ac7-1f0c-4c62-b9be-947fd7ca70e1",
      "organization": "Новолакский район"
    },
    {
      "id": "83eff92e-9f85-4dc2-a327-704a8abf417d",
      "reportName": "Паспорт экономического и социального развития Тарумовского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "022060ff-8825-4d59-a07b-e153bd0db3bb",
      "organization": "Тарумовский район"
    },
    {
      "id": "2d4c9d93-7aa3-4158-8906-f6fd4b26f4e6",
      "reportName": "Паспорт экономического и социального развития Магарамкентского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "5b2062b4-3747-4faf-b46f-71ace3e6378a",
      "organization": "Магарамкентский район"
    },
    {
      "id": "255cd2f3-24b8-41ec-aa53-018bb453dada",
      "reportName": "Паспорт экономического и социального развития города Буйнакск",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "a0be1797-67cc-43de-9cf4-2926a6e26389",
      "organization": "город Буйнакск"
    },
    {
      "id": "b0bc7eeb-9635-4bb3-ace4-a17f646d6da2",
      "reportName": "Паспорт экономического и социального развития Цунтинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "5a6647c5-565a-4c45-aa84-1b723be7993d",
      "organization": "Цунтинский район"
    },
    {
      "id": "237066a0-0b28-4157-bddb-d2615f9fc744",
      "reportName": "Паспорт экономического и социального развития Дахадаевского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "a5565a27-14b3-4c04-aba3-629952e4f474",
      "organization": "Дахадаевский район"
    },
    {
      "id": "ca37df05-cb44-49d8-9d87-00ad0b59e8b3",
      "reportName": "Паспорт экономического и социального развития Кулинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "7c45d4bf-3203-4d16-b504-52e06c81bc70",
      "organization": "Кулинский район"
    },
    {
      "id": "9d537006-305e-40e1-88f6-8dfbb74d9dae",
      "reportName": "Паспорт экономического и социального развития Сулейман-Стальского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "23e6005b-0086-4be0-947f-2525a0773b4d",
      "organization": "Сулейман-Стальский район"
    },
    {
      "id": "b0dd0b15-8a1a-4ca9-af60-68f64ab865fe",
      "reportName": "Паспорт экономического и социального развития города Дербент",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "705930bb-5f33-4b2b-9ac7-b73b00c29ad9",
      "organization": "город Дербент"
    },
    {
      "id": "8ac74845-c6fa-4d27-829c-1e562cc63b36",
      "reportName": "Паспорт экономического и социального развития Ахтынского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "bea127db-b6da-4997-a923-ae9b7dbe515e",
      "organization": "Ахтынский район"
    },
    {
      "id": "92eea988-0e9c-4064-9af7-ffbfcc0e0e65",
      "reportName": "Паспорт экономического и социального развития города Хасавюрт",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "ee15c2f6-2421-4cd5-8be4-519454ee25ae",
      "organization": "город Хасавюрт"
    },
    {
      "id": "3c1f2c92-3ac0-423e-85ae-a9c30aa38eb6",
      "reportName": "Паспорт экономического и социального развития Кизлярского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "4c45cc05-03e5-4c90-9e66-c6b66fa5741f",
      "organization": "Кизлярский район"
    },
    {
      "id": "034ace35-6644-46f9-aa32-9c1d11f08fb7",
      "reportName": "Паспорт экономического и социального развития города Кизляр",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 2,
      "period": "Ежеквартально",
      "organizationId": "4fd05888-9d35-4f68-a663-d9749b635d47",
      "organization": "город Кизляр"
    },
    {
      "id": "b5c30852-a625-4726-ad25-a190866772e4",
      "reportName": "Паспорт экономического и социального развития Ботлихского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "43c156f8-b43d-469e-9775-ad654f99948e",
      "organization": "Ботлихский район"
    },
    {
      "id": "a4edd067-a0f6-4364-8208-24259a2cff66",
      "reportName": "Паспорт экономического и социального развития Карабудахкентского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "43d6670c-f17c-4f37-bffa-d6460da9d729",
      "organization": "Карабудахкентский район"
    },
    {
      "id": "8e35830e-272f-4f62-a414-e3c58db55a78",
      "reportName": "Паспорт экономического и социального развития Ахвахского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "4b7fdc03-a08c-4124-8022-e93075f2b697",
      "organization": "Ахвахский район"
    },
    {
      "id": "7f5590db-9983-4af1-ba54-cce70a783a3d",
      "reportName": "Паспорт экономического и социального развития Рутульского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "d41f2108-5c6d-4f7a-91fd-5bd0cadbeade",
      "organization": "Рутульский район"
    },
    {
      "id": "1b9db21a-580c-4867-a5d6-fbd8e5bf1c79",
      "reportName": "Паспорт экономического и социального развития Кумторкалинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "94761bbd-ba5f-4bf1-a87f-0114777e7ec5",
      "organization": "Кумторкалинский район"
    },
    {
      "id": "1432e8da-c8d3-402f-9541-aad3524ac24e",
      "reportName": "Паспорт экономического и социального развития Хасавюртовского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "661159b9-fc41-47a0-8ef0-189565ebef0a",
      "organization": "Хасавюртовский район"
    },
    {
      "id": "c3935d43-b769-426f-a7a2-034d363e5a51",
      "reportName": "Паспорт экономического и социального развития Гунибского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "8fe89c46-db04-437f-838b-61481bd1f66e",
      "organization": "Гунибский район"
    },
    {
      "id": "4336b23f-06ec-4bb1-9a24-791ce48ac5ac",
      "reportName": "Паспорт экономического и социального развития Бежтинского участка",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "b0134961-e40e-4ab8-b0c4-31a3a183c31c",
      "organization": "Бежтинский участок"
    },
    {
      "id": "a7c4da23-575d-45d7-af20-cd4fb383e775",
      "reportName": "Паспорт экономического и социального развития Тляратинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "931cd822-49d2-4ef2-8b98-f7968566e810",
      "organization": "Тляратинский район"
    },
    {
      "id": "66f27ef5-ea72-427e-8658-168714814f3c",
      "reportName": "Паспорт экономического и социального развития города Каспийск",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "96813925-c755-4c42-8a72-396f07a93560",
      "organization": "город Каспийск"
    },
    {
      "id": "967122a5-e792-4a8c-9451-c469c707495d",
      "reportName": "Паспорт экономического и социального развития Цумадинского района",
      "industryId": 1,
      "industry": "Демография",
      "periodId": 4,
      "period": "Год",
      "organizationId": "af727466-baa9-42a3-a775-a53351eb2941",
      "organization": "Цумадинский район"
    }
  ]


const Report = () => {
  
    const listItem = Test1.map(item => (<div className={s.reporttlist} key={item.id}>
                                                  <ReportList item={item}/>
                                              </div>)) 
 

    return (
        <div className={s.reportt}> 
          <h1>{Test1[0].industry}</h1>
          {listItem}
        </div>
    )
}

export default Report;