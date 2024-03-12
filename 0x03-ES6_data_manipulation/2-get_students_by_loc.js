export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const objs = students.filter((item) => (item.location === city));

  return objs;
}
