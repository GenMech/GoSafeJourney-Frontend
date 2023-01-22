import { Box, Button, Flex, HStack, Text, Input } from '@chakra-ui/react';
import { Select, chakraComponents } from 'chakra-react-select';
import arr from './states';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { useState, useEffect, useRef } from 'react';

const SearchBar = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', removeOnClick, true);
  }, []);

  const removeOnClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <Flex justifyContent='space-between'>
      <Box w='330px' h='10' bg='white' borderRadius='6'>
        {/* {console.log(arr)}  I am able to fetch array here maybe i am doing something wrong in mapping*/}
        <Select
          placeholder='Select City, State'
          options={arr.map((key) => ({ key }))}
        />
      </Box>

      <Box w='330px' h='10' bg='white' borderRadius='6'>
        <Box direction='row' h='10px'>
          <Input
            w='330px'
            value={`Check-In     -->    Check-Out`} // We have to dynamicaly change checkin and check out to date selected
            // value={`CheckIn(${format(   // OR we can do this by showing date there
            //   range[0].startDate,
            //   'MM/dd/yyyy',
            // )}) to CheckOut(${format(range[0].endDate, 'MM/dd/yyyy')})`}
            textAlign='center'
            readOnly
            className='inputBox'
            onClick={() => setOpen((open) => !open)}
          />
          <Box ref={ref}>
            {open && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                direction='horizontal'
                className='calendarElement'
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box w='330px' h='10' bg='white' borderRadius='6'>
        <Select placeholder='No. Of Rooms and Guests'>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
      </Box>
      <Button variant='dark'>Search</Button>
    </Flex>
  );
};

export default SearchBar;
