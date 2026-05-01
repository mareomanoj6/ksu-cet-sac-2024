#!/bin/bash
for file in app/departments/notes-*/page.tsx; do
  dept=$(basename $(dirname $file) | cut -d'-' -f2)
  # Replace import { NOTES_XYZ } from "@/data/notes" with getNotes
  sed -i 's/import { NOTES_[A-Z]* } from "@\/data\/notes";/import { getNotes } from "@\/lib\/db";/' $file
  
  # Change function to async
  sed -i 's/export default function Notes[A-Z]*Page()/export default async function Notes'${dept^^}'Page()/' $file
  
  # Inject the await call inside the function
  sed -i '/return (/i \  const notes = await getNotes("'$dept'");\n' $file
  
  # Replace semesters={NOTES_XYZ} with semesters={notes}
  sed -i 's/semesters={NOTES_[A-Z]*}/semesters={notes}/' $file
done
