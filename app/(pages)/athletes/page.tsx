import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import athletesData from "@/data/athletes.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AthletesPage = () => (
  <>
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        The athletes' data is available but too large to display on this page.
        If you want to experiment, uncomment the code in
        /app/(pages)/athletes/page.tsx.
      </AlertDescription>
    </Alert>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {/**
    {athletesData.map((athlete, index) => (
      <Card className="">
        <CardHeader>
          <CardTitle>{athlete.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Country:</strong> {athlete.country}
          </p>
          <p>
            <strong>Gender:</strong> {athlete.gender}
          </p>
          <p>
            <strong>Disciplines:</strong> {athlete.disciplines}
          </p>
          <p>
            <strong>Events:</strong> {athlete.events}
          </p>
          <p>
            <strong>Birth Date:</strong> {athlete.birth_date}
          </p>
          <p>
            <strong>Height:</strong> {athlete.height} cm
          </p>
          <p>
            <strong>Weight:</strong> {athlete.weight} kg
          </p>
          <p>
            <strong>Coach:</strong> {athlete.coach}
          </p>
          <p>
            <strong>Sporting Relatives:</strong> {athlete.sporting_relatives}
          </p>
        </CardContent>
      </Card>
    ))}
    **/}
    </div>
  </>
);

export default AthletesPage;
