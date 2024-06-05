{
  const map: Map<string, number> = new Map();
  map.set('foo', 1111);
  map.set('bar', 9999);
  console.log(map);
  console.log(map.entries());
  console.log(map.keys());
  console.log(map.values());
  console.log(map.get('foo'));
  console.log(map.get('bar'));
  console.log(map.delete('foo'));
  console.log(map.has('foo'));
  console.log(map.has('bar'));
  map.clear();
}
