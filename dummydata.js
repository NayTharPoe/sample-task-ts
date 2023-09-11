// function createData(projectName, language, description, startDate, endDate) {
//   return {
//     projectName,
//     language,
//     description,
//     startDate,
//     endDate,
//   };
// }

// const rows = [
//   createData('Cupcake', 'ReactJS', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Donut', 'Python', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Eclair', 'node', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Frozen yoghurt', 'Golang', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Gingerbread', 'Nuxt', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Honeycomb', 'Next', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Ice cream sandwich', 'Flutter', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
//   createData('Jelly Bean', 'Dart', 'bah bah blah sheet', '2023-08-23', '2023-09-7'),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'projectName',
//     numeric: false,
//     disablePadding: true,
//     label: 'Project Name',
//   },
//   {
//     id: 'language',
//     numeric: false,
//     disablePadding: false,
//     label: 'Language',
//   },
//   {
//     id: 'description',
//     numeric: false,
//     disablePadding: false,
//     label: 'Description',
//   },
//   {
//     id: 'startDate',
//     numeric: false,
//     disablePadding: false,
//     label: 'Start Date',
//   },
//   {
//     id: 'endDate',
//     numeric: false,
//     disablePadding: false,
//     label: 'End Date',
//   },
//   {
//     id: 'actions',
//     numeric: false,
//     disablePadding: false,
//     label: 'Actions',
//   },
// ];