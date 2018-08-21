const sortByValue = getValue => (a, b) => {
  if (getValue(a) < getValue(b)) {
    return -1;
  } else if (getValue(a) > getValue(b)) {
    return 1;
  }
  return 0;
};

function getOrderTotal(orderItem) {
  return orderItem.lineItems
    .map(item => item.total)
    .reduce((a, b) => a + b, 0);
}

const config = {
  log: {
    initialDataFile: 'mockApiData/log.json',
    apiList: {
      sortFunctions: {
        date: sortByValue(logItem => -logItem.date),
        description: sortByValue(logItem => `${logItem.area} ${logItem.item}`),
        user: sortByValue(logItem => logItem.user),
        action: sortByValue(logItem => logItem.action),
      },
      transformer: logItem => logItem,
    },
  },
  news: {
    initialDataFile: 'mockApiData/news.json',
    apiList: {
      sortFunctions: {
        publishDate: sortByValue(newsItem => -newsItem.publishDate),
        title: sortByValue(newsItem => newsItem.title),
        status: sortByValue(newsItem => newsItem.status),
      },
      transformer: newsItem => ({
        id: newsItem.id,
        publishDate: newsItem.publishDate,
        title: newsItem.title,
        status: newsItem.status,
      }),
    },
  },
  orders: {
    initialDataFile: 'mockApiData/orders.json',
    apiList: {
      sortFunctions: {
        id: sortByValue(orderItem => orderItem.id),
        orderId: sortByValue(orderItem => orderItem.orderId),
        date: sortByValue(orderItem => -orderItem.date),
        name: sortByValue(orderItem => `${orderItem.lastName} ${orderItem.firstName}`),
        grandTotal: sortByValue(orderItem => getOrderTotal(orderItem)),
        status: sortByValue(orderItem => orderItem.status),
      },
      transformer: orderItem => ({
        id: orderItem.id,
        orderId: orderItem.orderId,
        date: orderItem.date,
        lastName: orderItem.lastName,
        firstName: orderItem.firstName,
        grandTotal: getOrderTotal(orderItem),
        status: orderItem.status,
      }),
    },
  },
  vacancies: {
    initialDataFile: 'mockApiData/vacancies.json',
    apiList: {
      sortFunctions: {
        publishDate: sortByValue(vacancy => -vacancy.publishDate),
        title: sortByValue(vacancy => vacancy.title),
        status: sortByValue(vacancy => vacancy.status),
      },
      transformer: vacancy => ({
        id: vacancy.id,
        publishDate: vacancy.publishDate,
        title: vacancy.title,
        status: vacancy.status,
      }),
    },
  },
};

export default config;
