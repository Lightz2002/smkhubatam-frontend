import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography, Box, Fab } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { InputChangeHandler } from "../../utilities/helper";
import LocationInputModal from "./LocationInputModal";
import { createLocation } from "../../api/userApi";
import LocationListItem from "./LocationListItem";
import { getLocationsQuery, getLocationQuery } from "../../api/queries";
import { useActionData } from "react-router";

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const formData = await request.formData();
      const inputs = Object.fromEntries(formData);
      // queryClient.invalidateQueries(["roles"]);
      const res = await createLocation(inputs);
      if (res.statusCode === 401) return;
      return res;
      // if credentials are correct
    } catch (e) {
      console.warn(e);
    }
  };

export const loader =
  (queryClient) =>
  async ({ request, params }) => {
    try {
      const query = getLocationsQuery();
      return (
        queryClient.getQueryData(query) ?? (await queryClient.fetchQuery(query))
      );
    } catch (e) {
      // const res = JSON.parse(JSON.stringify(e.response));
      // if (res.status === 401) return redirect("/login");
    }
  };

const LocationList = () => {
  const [locationId, setLocationId] = useState(null);
  const {
    data: location,
    error,
    status,
  } = useQuery(getLocationQuery(locationId));

  const res = useActionData();
  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery(getLocationsQuery(), {
    staleTime: 0,
    cacheTime: 0,
    refetchInterval: 0,
  });

  const [locationForms, setLocationForms] = useState([
    {
      name: "Name",
      label: "Name",
      column: 12,
      type: "text",
      value: "",
      validation: "required",
    },
    {
      name: "Code",
      label: "Code",
      type: "text",
      column: 12,
      value: "",
      validation: "required",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log(res);
    if (res && res.status === 201) {
      setOpenModal(false);
    }
  }, [res]);

  const toggleModal = (modal, forms = null) => {
    setOpenModal((prevState) => !modal);
    return locationForms;
  };

  const locationInputChangeHandler = (input) => {
    return InputChangeHandler(input, locationForms, setLocationForms);
  };

  const showUser = (e, id) => {
    setLocationId(id);
    toggleModal(openModal);
  };

  if (isLoading) {
    return "Loading...";
  }

  if (isError) {
    return "Somehing went wrong, Error";
  }

  if (openModal) {
    return (
      <LocationInputModal
        locationForms={locationForms}
        openModal={openModal}
        toggleModal={toggleModal}
        inputChangeHandler={locationInputChangeHandler}
      />
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          overflow: "auto",
          position: "relative",
        }}
      >
        Location
      </Typography>
      <Grid container spacing={2}>
        {locations.data.map((location) => (
          <LocationListItem
            key={location.Id}
            location={location}
            showUser={showUser}
          />
        ))}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        onClick={() => toggleModal(openModal)}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default LocationList;
