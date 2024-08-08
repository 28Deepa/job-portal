import React, { useState } from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import Select from "react-select";
import { SKILLS } from "../../../constants";
import { FilterBox } from "../../../global.styled";

const Filters = ({ onApplyFilters }: any) => {
  const [minRate, setMinRate] = useState<number | null>(0);
  const [maxRate, setMaxRate] = useState<number | null>(10000);
  const [skills, setSkills] = useState<string[]>([]);

  const handleRateChange = (event: any) => {
    const value = event.target.value;
    if (value === "0-70") {
      setMinRate(0);
      setMaxRate(70);
    } else if (value === "71-150") {
      setMinRate(71);
      setMaxRate(150);
    } else {
      setMinRate(151);
      setMaxRate(10000);
    }
  };

  const handleSkillChange = (selectedOptions: any) => {
    setSkills(selectedOptions.map((option: any) => option.value.toLowerCase()));
  };

  const handleApplyFilters = () => {
    onApplyFilters({ minRate, maxRate, skills });
  };

  return (
    <FilterBox>
      <Box display="flex" flexDirection="column">
        <Typography component="legend" color="primary">
          Min. salary / hour
        </Typography>
        <RadioGroup row name="minRate" onChange={handleRateChange}>
          <FormControlLabel value="0-70" control={<Radio />} label="0-70" />
          <FormControlLabel value="71-150" control={<Radio />} label="71-150" />
          <FormControlLabel value=">150" control={<Radio />} label=">150" />
        </RadioGroup>
      </Box>

      <Box display="flex" flexDirection="column">
        <Typography component="legend" color="primary">
          Skills
        </Typography>
        <Select
          isMulti
          name="skills"
          options={SKILLS.map((skill: string) => ({
            label: skill,
            value: skill,
          }))}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleSkillChange}
          value={skills.map((skill) => ({ label: skill, value: skill }))}
        />
      </Box>

      <Button variant="contained" onClick={handleApplyFilters}>
        Apply Filters
      </Button>
    </FilterBox>
  );
};

export default Filters;
