function tripple(val: number | string) {
  if (typeof val === "string") {
    console.log(val.repeat(2));
  } else {
    console.log(val + val + val);
  }
}

tripple("hello ");
